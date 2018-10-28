import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUnfoldMoreElement
 * @class IconTwotoneUnfoldMoreElement
 * @extends {AoflElement}
 */
class IconTwotoneUnfoldMoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUnfoldMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-unfold-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUnfoldMoreElement.is, IconTwotoneUnfoldMoreElement);

export default IconTwotoneUnfoldMoreElement;
