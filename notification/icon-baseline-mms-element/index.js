import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMmsElement
 * @class IconBaselineMmsElement
 * @extends {AoflElement}
 */
class IconBaselineMmsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMmsElement.is, IconBaselineMmsElement);

export default IconBaselineMmsElement;
