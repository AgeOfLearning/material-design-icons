import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCheckCircleElement
 * @class IconTwotoneCheckCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneCheckCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCheckCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-check-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCheckCircleElement.is, IconTwotoneCheckCircleElement);

export default IconTwotoneCheckCircleElement;
