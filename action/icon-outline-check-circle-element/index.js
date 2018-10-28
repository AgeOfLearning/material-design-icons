import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCheckCircleElement
 * @class IconOutlineCheckCircleElement
 * @extends {AoflElement}
 */
class IconOutlineCheckCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCheckCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-check-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCheckCircleElement.is, IconOutlineCheckCircleElement);

export default IconOutlineCheckCircleElement;
