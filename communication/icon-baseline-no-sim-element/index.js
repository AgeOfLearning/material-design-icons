import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNoSimElement
 * @class IconBaselineNoSimElement
 * @extends {AoflElement}
 */
class IconBaselineNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNoSimElement.is, IconBaselineNoSimElement);

export default IconBaselineNoSimElement;
