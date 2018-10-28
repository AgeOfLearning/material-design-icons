import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextsmsElement
 * @class IconBaselineTextsmsElement
 * @extends {AoflElement}
 */
class IconBaselineTextsmsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextsmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-textsms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextsmsElement.is, IconBaselineTextsmsElement);

export default IconBaselineTextsmsElement;
