import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMemoryElement
 * @class IconBaselineMemoryElement
 * @extends {AoflElement}
 */
class IconBaselineMemoryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMemoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-memory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMemoryElement.is, IconBaselineMemoryElement);

export default IconBaselineMemoryElement;
