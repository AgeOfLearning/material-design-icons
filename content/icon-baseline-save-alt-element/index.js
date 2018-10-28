import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSaveAltElement
 * @class IconBaselineSaveAltElement
 * @extends {AoflElement}
 */
class IconBaselineSaveAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSaveAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-save-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSaveAltElement.is, IconBaselineSaveAltElement);

export default IconBaselineSaveAltElement;
