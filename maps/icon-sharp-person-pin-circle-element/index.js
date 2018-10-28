import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonPinCircleElement
 * @class IconSharpPersonPinCircleElement
 * @extends {AoflElement}
 */
class IconSharpPersonPinCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonPinCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person-pin-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonPinCircleElement.is, IconSharpPersonPinCircleElement);

export default IconSharpPersonPinCircleElement;
