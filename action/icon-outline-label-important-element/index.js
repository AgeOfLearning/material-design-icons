import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLabelImportantElement
 * @class IconOutlineLabelImportantElement
 * @extends {AoflElement}
 */
class IconOutlineLabelImportantElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLabelImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-label-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLabelImportantElement.is, IconOutlineLabelImportantElement);

export default IconOutlineLabelImportantElement;
