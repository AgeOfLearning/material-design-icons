import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUnfoldLessElement
 * @class IconOutlineUnfoldLessElement
 * @extends {AoflElement}
 */
class IconOutlineUnfoldLessElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUnfoldLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-unfold-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUnfoldLessElement.is, IconOutlineUnfoldLessElement);

export default IconOutlineUnfoldLessElement;
