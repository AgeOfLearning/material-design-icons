import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLensElement
 * @class IconOutlineLensElement
 * @extends {AoflElement}
 */
class IconOutlineLensElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLensElement.is, IconOutlineLensElement);

export default IconOutlineLensElement;
