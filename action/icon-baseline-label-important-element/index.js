import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLabelImportantElement
 * @class IconBaselineLabelImportantElement
 * @extends {AoflElement}
 */
class IconBaselineLabelImportantElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLabelImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-label-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLabelImportantElement.is, IconBaselineLabelImportantElement);

export default IconBaselineLabelImportantElement;
