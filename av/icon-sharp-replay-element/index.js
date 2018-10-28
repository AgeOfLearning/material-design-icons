import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplayElement
 * @class IconSharpReplayElement
 * @extends {AoflElement}
 */
class IconSharpReplayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReplayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-replay';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplayElement.is, IconSharpReplayElement);

export default IconSharpReplayElement;
