import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRvHookupElement
 * @class IconBaselineRvHookupElement
 * @extends {AoflElement}
 */
class IconBaselineRvHookupElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRvHookupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-rv-hookup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRvHookupElement.is, IconBaselineRvHookupElement);

export default IconBaselineRvHookupElement;
