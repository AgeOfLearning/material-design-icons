import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFiberDvrElement
 * @class IconOutlineFiberDvrElement
 * @extends {AoflElement}
 */
class IconOutlineFiberDvrElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFiberDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fiber-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFiberDvrElement.is, IconOutlineFiberDvrElement);

export default IconOutlineFiberDvrElement;
