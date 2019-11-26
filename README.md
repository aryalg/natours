This is read me file for the reference which I can look later for grasping different points which are worth noting.

=> Refactoring of code with seperate space for handling route function and actual routes
This code was:
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

Replace by code below:
app.route('/api/v1/tours').get(getAllTours).post(createTour)
app.route('/api/v1/tours').get(getTour).patch(updateTour).delete(deleteTour)
