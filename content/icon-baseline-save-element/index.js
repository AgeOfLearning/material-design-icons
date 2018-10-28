import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSaveElement
 * @class IconBaselineSaveElement
 * @extends {AoflElement}
 */
class IconBaselineSaveElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSaveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-save';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSaveElement.is, IconBaselineSaveElement);

export default IconBaselineSaveElement;
