import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewModuleElement
 * @class IconBaselineViewModuleElement
 * @extends {AoflElement}
 */
class IconBaselineViewModuleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewModuleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-module';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewModuleElement.is, IconBaselineViewModuleElement);

export default IconBaselineViewModuleElement;
