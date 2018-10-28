import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSkipNextElement
 * @class IconBaselineSkipNextElement
 * @extends {AoflElement}
 */
class IconBaselineSkipNextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSkipNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-skip-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSkipNextElement.is, IconBaselineSkipNextElement);

export default IconBaselineSkipNextElement;
