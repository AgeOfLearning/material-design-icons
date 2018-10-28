import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFastRewindElement
 * @class IconTwotoneFastRewindElement
 * @extends {AoflElement}
 */
class IconTwotoneFastRewindElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFastRewindElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fast-rewind';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFastRewindElement.is, IconTwotoneFastRewindElement);

export default IconTwotoneFastRewindElement;
