import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineForward30Element
 * @class IconBaselineForward30Element
 * @extends {AoflElement}
 */
class IconBaselineForward30Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineForward30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-forward-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineForward30Element.is, IconBaselineForward30Element);

export default IconBaselineForward30Element;
