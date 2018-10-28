import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterFramesElement
 * @class IconBaselineFilterFramesElement
 * @extends {AoflElement}
 */
class IconBaselineFilterFramesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterFramesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-frames';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterFramesElement.is, IconBaselineFilterFramesElement);

export default IconBaselineFilterFramesElement;
