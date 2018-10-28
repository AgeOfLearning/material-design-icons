import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUnfoldLessElement
 * @class IconTwotoneUnfoldLessElement
 * @extends {AoflElement}
 */
class IconTwotoneUnfoldLessElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUnfoldLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-unfold-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUnfoldLessElement.is, IconTwotoneUnfoldLessElement);

export default IconTwotoneUnfoldLessElement;
