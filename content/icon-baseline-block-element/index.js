import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBlockElement
 * @class IconBaselineBlockElement
 * @extends {AoflElement}
 */
class IconBaselineBlockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBlockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-block';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBlockElement.is, IconBaselineBlockElement);

export default IconBaselineBlockElement;
