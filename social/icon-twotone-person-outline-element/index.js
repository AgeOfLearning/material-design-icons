import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonOutlineElement
 * @class IconTwotonePersonOutlineElement
 * @extends {AoflElement}
 */
class IconTwotonePersonOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonOutlineElement.is, IconTwotonePersonOutlineElement);

export default IconTwotonePersonOutlineElement;
