import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWorkOutlineElement
 * @class IconTwotoneWorkOutlineElement
 * @extends {AoflElement}
 */
class IconTwotoneWorkOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWorkOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-work-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWorkOutlineElement.is, IconTwotoneWorkOutlineElement);

export default IconTwotoneWorkOutlineElement;
