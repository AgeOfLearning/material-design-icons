import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRotateLeftElement
 * @class IconBaselineRotateLeftElement
 * @extends {AoflElement}
 */
class IconBaselineRotateLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRotateLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rotate-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRotateLeftElement.is, IconBaselineRotateLeftElement);

export default IconBaselineRotateLeftElement;
