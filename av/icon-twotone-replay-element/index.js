import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplayElement
 * @class IconTwotoneReplayElement
 * @extends {AoflElement}
 */
class IconTwotoneReplayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-replay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplayElement.is, IconTwotoneReplayElement);

export default IconTwotoneReplayElement;
