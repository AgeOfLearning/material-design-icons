import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePageviewElement
 * @class IconOutlinePageviewElement
 * @extends {AoflElement}
 */
class IconOutlinePageviewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePageviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pageview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePageviewElement.is, IconOutlinePageviewElement);

export default IconOutlinePageviewElement;
