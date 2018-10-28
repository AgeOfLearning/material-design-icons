import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRedoElement
 * @class IconBaselineRedoElement
 * @extends {AoflElement}
 */
class IconBaselineRedoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRedoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-redo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRedoElement.is, IconBaselineRedoElement);

export default IconBaselineRedoElement;
