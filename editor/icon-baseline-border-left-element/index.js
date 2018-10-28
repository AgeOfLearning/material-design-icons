import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderLeftElement
 * @class IconBaselineBorderLeftElement
 * @extends {AoflElement}
 */
class IconBaselineBorderLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderLeftElement.is, IconBaselineBorderLeftElement);

export default IconBaselineBorderLeftElement;
