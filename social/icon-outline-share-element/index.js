import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineShareElement
 * @class IconOutlineShareElement
 * @extends {AoflElement}
 */
class IconOutlineShareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineShareElement.is, IconOutlineShareElement);

export default IconOutlineShareElement;
