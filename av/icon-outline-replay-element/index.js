import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplayElement
 * @class IconOutlineReplayElement
 * @extends {AoflElement}
 */
class IconOutlineReplayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-replay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplayElement.is, IconOutlineReplayElement);

export default IconOutlineReplayElement;
