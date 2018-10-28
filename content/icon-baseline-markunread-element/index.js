import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMarkunreadElement
 * @class IconBaselineMarkunreadElement
 * @extends {AoflElement}
 */
class IconBaselineMarkunreadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMarkunreadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-markunread';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMarkunreadElement.is, IconBaselineMarkunreadElement);

export default IconBaselineMarkunreadElement;
