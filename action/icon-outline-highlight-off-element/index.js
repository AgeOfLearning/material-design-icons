import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHighlightOffElement
 * @class IconOutlineHighlightOffElement
 * @extends {AoflElement}
 */
class IconOutlineHighlightOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHighlightOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-highlight-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHighlightOffElement.is, IconOutlineHighlightOffElement);

export default IconOutlineHighlightOffElement;
