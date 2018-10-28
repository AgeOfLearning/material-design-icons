import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFastForwardElement
 * @class IconBaselineFastForwardElement
 * @extends {AoflElement}
 */
class IconBaselineFastForwardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFastForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fast-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFastForwardElement.is, IconBaselineFastForwardElement);

export default IconBaselineFastForwardElement;
