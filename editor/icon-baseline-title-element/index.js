import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTitleElement
 * @class IconBaselineTitleElement
 * @extends {AoflElement}
 */
class IconBaselineTitleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTitleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-title';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTitleElement.is, IconBaselineTitleElement);

export default IconBaselineTitleElement;
