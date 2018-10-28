import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExpandLessElement
 * @class IconTwotoneExpandLessElement
 * @extends {AoflElement}
 */
class IconTwotoneExpandLessElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExpandLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-expand-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExpandLessElement.is, IconTwotoneExpandLessElement);

export default IconTwotoneExpandLessElement;
