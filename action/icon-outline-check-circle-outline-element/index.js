import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCheckCircleOutlineElement
 * @class IconOutlineCheckCircleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlineCheckCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCheckCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-check-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCheckCircleOutlineElement.is, IconOutlineCheckCircleOutlineElement);

export default IconOutlineCheckCircleOutlineElement;
