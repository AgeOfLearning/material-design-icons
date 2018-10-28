import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFastRewindElement
 * @class IconBaselineFastRewindElement
 * @extends {AoflElement}
 */
class IconBaselineFastRewindElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFastRewindElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fast-rewind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFastRewindElement.is, IconBaselineFastRewindElement);

export default IconBaselineFastRewindElement;
