import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLoopElement
 * @class IconBaselineLoopElement
 * @extends {AoflElement}
 */
class IconBaselineLoopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLoopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-loop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLoopElement.is, IconBaselineLoopElement);

export default IconBaselineLoopElement;
