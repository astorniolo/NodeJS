// process.argv = ['node','app.ts','-b', '10'];
// import './app';
import { ServerApp } from './presentation/server-app';


describe('Test App.ts', () => {


  test('should call Server.run with values', async() => {
    //arrange
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ['node','app.ts','-b', '10','-l','5','-s','-n','test-file','-d','test-destination'];

    //act :estimulo
    await import('./app');

    //assert
    expect(serverRunMock).toHaveBeenCalledWith({ 
      base: 10, 
      limit: 5, 
      showTable: true, 
      fileName: 'test-file', 
      fileDestination: 'test-destination' 
    });


  });


});