import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextsmsElement
 * @class IconOutlineTextsmsElement
 * @extends {AoflElement}
 */
class IconOutlineTextsmsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextsmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-textsms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextsmsElement.is, IconOutlineTextsmsElement);

export default IconOutlineTextsmsElement;
