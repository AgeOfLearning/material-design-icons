import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFindReplaceElement
 * @class IconOutlineFindReplaceElement
 * @extends {AoflElement}
 */
class IconOutlineFindReplaceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFindReplaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-find-replace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFindReplaceElement.is, IconOutlineFindReplaceElement);

export default IconOutlineFindReplaceElement;
