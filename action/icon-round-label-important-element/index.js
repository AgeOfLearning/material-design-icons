import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLabelImportantElement
 * @class IconRoundLabelImportantElement
 * @extends {AoflElement}
 */
class IconRoundLabelImportantElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLabelImportantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-label-important';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLabelImportantElement.is, IconRoundLabelImportantElement);

export default IconRoundLabelImportantElement;
