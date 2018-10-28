import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLabelImportantElement
 * @class IconTwotoneLabelImportantElement
 * @extends {AoflElement}
 */
class IconTwotoneLabelImportantElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLabelImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-label-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLabelImportantElement.is, IconTwotoneLabelImportantElement);

export default IconTwotoneLabelImportantElement;
