import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLabelImportantElement
 * @class IconSharpLabelImportantElement
 * @extends {AoflElement}
 */
class IconSharpLabelImportantElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLabelImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-label-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLabelImportantElement.is, IconSharpLabelImportantElement);

export default IconSharpLabelImportantElement;
