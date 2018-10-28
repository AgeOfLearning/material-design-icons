import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCheckCircleOutlineElement
 * @class IconTwotoneCheckCircleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneCheckCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCheckCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-check-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCheckCircleOutlineElement.is, IconTwotoneCheckCircleOutlineElement);

export default IconTwotoneCheckCircleOutlineElement;
