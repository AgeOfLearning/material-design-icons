import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLiveHelpElement
 * @class IconBaselineLiveHelpElement
 * @extends {AoflElement}
 */
class IconBaselineLiveHelpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLiveHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-live-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLiveHelpElement.is, IconBaselineLiveHelpElement);

export default IconBaselineLiveHelpElement;
