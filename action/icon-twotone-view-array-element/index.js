import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewArrayElement
 * @class IconTwotoneViewArrayElement
 * @extends {AoflElement}
 */
class IconTwotoneViewArrayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewArrayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-array';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewArrayElement.is, IconTwotoneViewArrayElement);

export default IconTwotoneViewArrayElement;
