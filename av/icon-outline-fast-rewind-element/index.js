import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFastRewindElement
 * @class IconOutlineFastRewindElement
 * @extends {AoflElement}
 */
class IconOutlineFastRewindElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFastRewindElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fast-rewind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFastRewindElement.is, IconOutlineFastRewindElement);

export default IconOutlineFastRewindElement;
