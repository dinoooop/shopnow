import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import { show, update } from './productSlice'
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import { validateForm } from './productValidation'

function ProductEditScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams();

    const stateProduct = useSelector(state => state.product)
    const [product, setProduct] = useState(stateProduct.product || {});
    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(show(params.id));
    }, [dispatch, params.id]);

    useEffect(() => {
        if (stateProduct.product) {
            setProduct(stateProduct.product);
        }
    }, [stateProduct.product]);

    const onChangeForm = (e) => {
        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
        const error = validateForm(e.target.name, e.target.value)
        setErrors(prev => ({ ...prev, [e.target.name]: error }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedErrors = {}
        Object.entries(product).forEach(([key, value]) => {
            updatedErrors[key] = validateForm(key, value)
        })
        setErrors(prev => ({ ...prev, ...updatedErrors }))
        const allErrorsFalse = Object.values(updatedErrors).every(error => error === false)
        if (allErrorsFalse) {
            dispatch(update(product))
            // navigate('/products')
        }
    }

    return (
        <Dashboard>
            <Card className='mt-2'>
                <Card.Body>
                    <Card.Title>Product Edit</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Edit your product.</Card.Subtitle>

                    <Form onSubmit={handleSubmit} noValidate > 
                        <Form.Group controlId="productName" className='mb-3'>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={product.name || ''}
                                name="name"
                                onChange={onChangeForm}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="productDescription" className='mb-3'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                value={product.description || ''}
                                name="description"
                                onChange={onChangeForm}
                                isInvalid={!!errors.description}
                            />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant='primary' type='submit'>Save</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Dashboard>
    )
}

export default ProductEditScreen